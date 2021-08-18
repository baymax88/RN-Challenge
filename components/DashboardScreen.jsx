import React, { useEffect } from 'react';
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

// svgs
import RightArrowIcon from "../icons/RightArrow"
import SunRiseIcon from "../icons/SunRise"
import CheckIcon from "../icons/Check"
import CheckIcon2 from "../icons/Check2"
import CircleIcon from "../icons/Circle"
import ChevronIcon from "../icons/Chevron"
import MedIcon from "../icons/Med"

const styles = StyleSheet.create({
  hr: {
    borderColor: "#E1E4E8",
    borderWidth: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    padding: 5,
    margin: 10,
    backgroundColor: 'white'
  },
  circleContainer: {
    flexDirection: 'row',
  },
  openCircle: {
    marginRight: 15,
    height: 15,
    width: 15,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'blue'
  },
  filledCircle: {
    marginRight: 15,
    height: 15,
    width: 15,
    borderRadius: 100,
    backgroundColor: 'blue'
  },
  medication: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10
  },
  barContainer: {
    height: 10,
    width: '100%',
    backgroundColor: '#FAF3E2',
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 16,
    marginBottom: 16,
  },
  pointsState: {
    backgroundColor: '#FFC453',
    borderRadius: 10,
    height: '100%',
  },
  buddy: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#E1E4E8',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  historyDay: {

  },

  root: {
    flex: 1,
  },
  flexLayout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading1: {
    fontSize: 20,
    lineHeight: 25,
    color: "#303030",
  },
  sectionHeadBtn: {
    fontSize: 14,
    lineHeight: 17,
    color: "#2F48AD",
  },
  Paper: {
    borderWidth: 1,
    borderColor: "#E1E4E8",
    borderRadius: 8,
    overflow: "hidden",
  },
  medsContent: {
    borderTopColor: "#FFDFC1",
    borderTopWidth: 6,
    borderBottomColor: "#E1E4E8",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading2: {
    color: "#303030",
    fontSize: 16,
    lineHeight: 20,
  },
  subText: {
    color: "#959DA5",
    fontSize: 14,
    lineHeight: 17,
  },
  checkIcon: {
    marginRight: 4,
  },
  medItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E1E4E8",
  },
  takeBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5C7CFA",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  medItemIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderWidth: 3,
    borderRadius: 40,
    borderColor: "#E1E4E8",
  },
  medItemTime: {
    fontSize: 12,
    lineHeight: 15,
    color: "#959DA5",
  },
});

// Common components
const SectionHead = ({ heading, buttonLabel, buttonAction }) => {
  return (
    <View style={styles.sectionHead}>
      <Text style={styles.heading1}>{heading}</Text>
      <TouchableOpacity onPress={buttonAction} style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.sectionHeadBtn}>{buttonLabel}</Text>
        <RightArrowIcon style={{ marginLeft: 8 }} />
      </TouchableOpacity>
    </View>
  )
}

const Paper = ({ children, style }) => {
  return (
    <View style={{ ...styles.Paper, ...style }}>
      {children}
    </View>
  )
}

const CompleteState = ({ total, takens }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 4 }}>
      {[...Array(takens)].map((e, i) => (
        <CheckIcon style={styles.checkIcon} key={i} />
      ))}
      {[...Array(total - takens)].map((e, i) => (
        <CircleIcon style={styles.checkIcon} key={i} />
      ))}
    </View>
  )
}

// Sections
function TakeMeds ({ todayMedications }) {
  const [showItems, setShowItems] = React.useState(false);
  const [medItems, setMedItems] = React.useState([]);

  const takeMedication = (id) => {
    setMedItems(medItems.map(item => {
      if (item.id !== id) return item
      else {
        return { ...item, isTaken: true }
      }
    }))

    // todo: SET MEDICATIOIN
  }

  const renderMedItem = ({ item }) => {
    const isLast = item.id === medItems[medItems.length - 1].id

    return (
      <View style={isLast ? { ...styles.medItem, borderBottomWidth: 0 } : styles.medItem} key={item.id}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.medItemIcon}>
            <MedIcon />
          </View>
          <View style={{ marginLeft: 12 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.medItemTime}>{item.dueTime}</Text>
              <SunRiseIcon style={{ marginLeft: 4 }} />
            </View>
            <Text style={{ ...styles.heading2, fontWeight: "600" }}>{item.name}</Text>
            <Text style={styles.heading2}>Take {item.dosage} {item.dosageType}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.takeBtn} onPress={() => takeMedication(item.id)}>
          <Text style={{ ...styles.sectionHeadBtn, color: "#FFF" }}>Take</Text>
          <CheckIcon2 fill="#FFF" style={{ marginLeft: 4 }} />
        </TouchableOpacity>
      </View>
    )
  }

  useEffect(() => {
    setMedItems(todayMedications);
  }, [todayMedications])

  return (
    <View style={styles.section}>
      <SectionHead heading="Take your meds" buttonLabel="Full schedule" buttonAction={() => {}} />
      <Paper style={{ marginTop: 16 }}>
        <View style={showItems ? { ...styles.medsContent, borderBottomWidth: 1 } : styles.medsContent}>
          <View style={{ flexDirection: "row" }}>
            <SunRiseIcon style={{ alignSelf: "flex-start" }} />
            <View style={{ marginLeft: 10, alignSelf: "flex-start" }}>
              <Text style={styles.heading2}>Morning Medication</Text>
              <Text style={{ marginTop: 4, ...styles.subText}}>{medItems?.length} routine meds</Text>
              <CompleteState
                total={medItems?.length}
                takens={medItems?.filter(item => item.isTaken).length} />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setShowItems((prev) => !prev)}
            style={{ borderWidth: 1, width: 42, height: 42, borderRadius: 42, alignSelf: "center", alignItems: "center", justifyContent: "center", backgroundColor: "#FFF", borderColor: "#E1E4E8" }}
          >
            <ChevronIcon style={showItems ? {} : { transform: [{ rotate: "180deg" }] }} />
          </TouchableOpacity>
        </View>
        {showItems && (
          <FlatList
            data={medItems?.filter(item => !item.isTaken)}
            renderItem={renderMedItem}
            keyExtractor={item => item.id}
          />
        )}
      </Paper>
    </View>
  )
}

function AsNeeded () {
  return (
    <View style={styles.section}>
      <Paper>
        <View style={{ padding: 16, ...styles.flexLayout}}>
          <View>
            <Text style={styles.heading2}>As-needed medication</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CheckIcon2 fill="#21B25A" />
              <Text style={{ ...styles.subText, color: "#1AA260", marginLeft: 4 }}>3 of 5 meds okay to take</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.sectionHeadBtn}>View</Text>
          </TouchableOpacity>
        </View>
      </Paper>
    </View>
  )
}

function Rewards () {
  return (
    <View style={styles.section}>
      <SectionHead heading="Earn Rewards" buttonLabel="All Rewards" buttonAction={() => {}} />
      <Paper style={{ marginTop: 16, padding: 16, position: "relative" }}>
        <Image source={require("../assets/rocket.png")} style={{ position: "absolute", right: 16 }}/>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={{ color: "#303030", fontSize: 32, fontWeight: "600" }}>80</Text>
          <Text style={{ ...styles.heading2, color: "#959DA5", marginBottom: 6 }}> Points</Text>
        </View>

        <View style={styles.barContainer}>
          <View style={{ ...styles.pointsState, width: "20%" }} />
        </View>
        {/* Should be rendered as a component */}
        <View style={{ flexDirection: 'row', marginTop: 4 }}>
          <CheckIcon />
          <Text style={{ ...styles.medItemTime, marginLeft: 8, color: "#586069" }}>5 Stars earned .</Text>
          <Text style={{ ...styles.medItemTime, marginLeft: 8, color: "#586069" }}>Open the app once a day</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 4 }}>
          <CheckIcon />
          <Text style={{ ...styles.medItemTime, marginLeft: 8, color: "#586069" }}>15 Stars earned .</Text>
          <Text style={{ ...styles.medItemTime, marginLeft: 8, color: "#586069" }}>3 meds taken</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 4 }}>
          <CircleIcon />
          <Text style={{ ...styles.medItemTime, marginLeft: 8 }}>0 Stars earned .</Text>
          <Text style={{ ...styles.medItemTime, marginLeft: 8 }}>Daily health survey</Text>
        </View>
        <TouchableOpacity onPress={() => {}} style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 16 }}>
          <Text style={styles.sectionHeadBtn}>Expand</Text>
          <RightArrowIcon style={{ marginLeft: 8, transform: [{ rotate: "90deg" }] }} />
        </TouchableOpacity>
      </Paper>
    </View>
  )
}

function Buddies () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'FETCH_BUDDIES' })
  }, [])
  const buddyList = useSelector(state => state.buddies)

  function buddyItem ({item: buddy}) {
    const isLast = buddy.id === buddyList.slice(0,3)[2].id

    return (
      <View key={buddy.id} style={isLast ? { ...styles.buddy, borderBottomWidth: 0 } : styles.buddy}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{uri: buddy.avatarUrl}} style={{ height: 40, width: 40 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ ...styles.subText, color: "#303030" }}>{buddy.name}</Text>
            <Text style={{ ...styles.medItemTime, color: "#586069" }}>All-time adherence</Text>
          </View>
        </View>
        <Text style={{ ...styles.medItemTime, color: "#1AA260" }}>{String(buddy.adherence).slice(0, 2)}%</Text>
      </View>
    )
  }

  return (
    <View style={styles.section}>
      <SectionHead heading="Check on buddies" buttonLabel="All buddies" buttonAction={() => {}} />
      <Paper style={{ marginTop: 16 }}>
        <FlatList
          data={buddyList.slice(0,3)}
          renderItem={buddyItem}
          keyExtractor={buddy => String(buddy.id)}
        />
      </Paper>
    </View>
  )
}

function RecentHistory () {
  return (
    <View style={styles.section}>
      <SectionHead heading="Past 7 days" buttonLabel="Medication history" buttonAction={() => {}} />
      <Paper style={{ marginTop: 16, padding: 16 }}>
        <Text style={styles.medItemTime}>Medication Progress</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.historyDay}>
            <Text>Th</Text>
            <Text>12</Text>
            <View style={styles.barContainer}>
              <View style={{ backgroundColor: 'orange', width: '50%', height: '100%' }} />
            </View>
          </View>
          <View style={styles.historyDay}>
            <Text>Fri</Text>
            <Text>13</Text>
            <View style={styles.barContainer}>
              <View style={{ backgroundColor: 'orange', width: '100%', height: '100%' }} />
            </View>
          </View>
          <View style={styles.historyDay}>
            <Text>Sat</Text>
            <Text>14</Text>
            <View style={styles.barContainer}>
              <View style={{ backgroundColor: 'orange', width: '100%', height: '100%' }} />
            </View>
          </View>
          <View style={styles.historyDay}>
            <Text>Sun</Text>
            <Text>15</Text>
            <View style={styles.barContainer}>
              <View style={{ backgroundColor: 'orange', width: '50%', height: '100%' }} />
            </View>
          </View>
          <View style={styles.historyDay}>
            <Text>Mon</Text>
            <Text>16</Text>
            <View style={styles.barContainer}>
              <View style={{ backgroundColor: 'orange', width: '50%', height: '100%' }} />
            </View>
          </View>
          <View style={styles.historyDay}>
            <Text>Tues</Text>
            <Text>17</Text>
            <View style={styles.barContainer}>
              <View style={{ backgroundColor: 'orange', width: '50%', height: '100%' }} />
            </View>
          </View>
          <View style={styles.historyDay}>
            <Text>Wed</Text>
            <Text>18</Text>
            <View style={styles.barContainer}>
              <View style={{ backgroundColor: 'orange', width: '50%', height: '100%' }} />
            </View>
          </View>
        </View>
      </Paper>
    </View>
  )
}

function DashboardScreen () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_TODAY_MEDICATIONS" })
  }, [])

  const todayMedications = useSelector(state => state.todayMedications)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView style={styles.root}>
        <TakeMeds todayMedications={todayMedications} />
        <AsNeeded />
        <View style={styles.hr} />
        <Rewards />
        <View style={styles.hr} />
        <Buddies />
        <View style={styles.hr} />
        <RecentHistory />
      </ScrollView>
    </SafeAreaView>
  );
}

export default DashboardScreen