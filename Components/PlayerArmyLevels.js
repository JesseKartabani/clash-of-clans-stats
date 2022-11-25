import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPlayerStats } from "../fetchers/stats";

const PlayerArmyLevels = () => {
  // Player data for users search
  const { isError, isSuccess, isLoading, data, error } = useQuery(
    ["playerStats"],
    fetchPlayerStats
  );

  if (isLoading) {
    console.log("loading");
    return <Text>Loading army</Text>;
  }

  if (isError) {
    console.log(error);
    return <Text>Error...</Text>;
  }

  return (
    <View>
      {/* Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}> Army </Text>
      </View>

      {/* Heroes sub heading */}
      <Text style={styles.subHeadingText}>Heroes</Text>

      {/* All players heroes levels */}
      <ScrollView
        style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        paddingTop={5}
      >
        {/* Barbarian king hero */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/heroes/barbarianHero.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.heroes[0].level}</Text>
          </View>
        </Text>

        {/* Archer queen hero*/}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/heroes/archerHero.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.heroes[1].level}</Text>
          </View>
        </Text>

        {/* Grand warden hero*/}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/heroes/grandWardenHero.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.heroes[2].level}</Text>
          </View>
        </Text>

        {/* Royal champion hero*/}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/heroes/royalChampionHero.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.heroes[4].level}</Text>
          </View>
        </Text>

        {/* Battle machine hero*/}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/heroes/battleMachineHero.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.heroes[3].level}</Text>
          </View>
        </Text>
      </ScrollView>

      {/* Pets sub heading */}
      <Text style={styles.subHeadingText}>Pets</Text>

      {/* All players pets levels */}
      <ScrollView
        style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        paddingTop={5}
      >
        {/* L.A.S.S.I pet */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/pets/LASSI.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[57].level}</Text>
          </View>
        </Text>

        {/* Electro owl pet */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/pets/electroOwl.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[59].level}</Text>
          </View>
        </Text>

        {/* Mighty yak pet */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/pets/mightyYak.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[58].level}</Text>
          </View>
        </Text>

        {/* Unicorn pet */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/pets/unicorn.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[60].level}</Text>
          </View>
        </Text>

        {/* Phoenix pet */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/pets/phoenix.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[61].level}</Text>
          </View>
        </Text>

        {/* Poison lizard pet */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/pets/poisonLizard.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[62].level}</Text>
          </View>
        </Text>

        {/* Diggy pet */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/pets/diggy.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[63].level}</Text>
          </View>
        </Text>

        {/* Frosty pet */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/pets/frosty.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[64].level}</Text>
          </View>
        </Text>
      </ScrollView>

      {/* Troops sub heading */}
      <Text style={styles.subHeadingText}>Troops</Text>

      {/* All players troops levels */}
      <ScrollView
        style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        paddingTop={5}
      >
        {/* Barbarian troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/barbarianTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[0].level}</Text>
          </View>
        </Text>

        {/* Archer troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/archerTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[1].level}</Text>
          </View>
        </Text>

        {/* Goblin troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/goblinTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[2].level}</Text>
          </View>
        </Text>

        {/* Giant troop*/}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/giantTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[3].level}</Text>
          </View>
        </Text>

        {/* Wall breaker troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/wallBreakerTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[4].level}</Text>
          </View>
        </Text>

        {/* Balloon troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/balloonTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[5].level}</Text>
          </View>
        </Text>

        {/* Wizard troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/wizardTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[6].level}</Text>
          </View>
        </Text>

        {/* Healer troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/healerTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[7].level}</Text>
          </View>
        </Text>

        {/* Dragon troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/dragonTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[8].level}</Text>
          </View>
        </Text>

        {/* Pekka troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/pekkaTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[9].level}</Text>
          </View>
        </Text>

        {/* Baby dragon troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/babyDragonTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[17].level}</Text>
          </View>
        </Text>

        {/* Miner troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/minerTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[18].level}</Text>
          </View>
        </Text>

        {/* Electro dragon troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/electroDragonTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[39].level}</Text>
          </View>
        </Text>

        {/* Yeti troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/yetiTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[35].level}</Text>
          </View>
        </Text>

        {/* Dragon rider troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/dragonRiderTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[43].level}</Text>
          </View>
        </Text>

        {/* Minion troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/minionTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[10].level}</Text>
          </View>
        </Text>

        {/* Hog rider troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/hogRiderTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[11].level}</Text>
          </View>
        </Text>

        {/* Valkyrie troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/valkyrieTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[12].level}</Text>
          </View>
        </Text>

        {/* Golem troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/golemTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[13].level}</Text>
          </View>
        </Text>

        {/* Witch troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/witchTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[14].level}</Text>
          </View>
        </Text>

        {/* Lava hound troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/lavaHoundTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[15].level}</Text>
          </View>
        </Text>

        {/* Bowler troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/bowlerTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[16].level}</Text>
          </View>
        </Text>

        {/* Ice golem troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/iceGolemTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[38].level}</Text>
          </View>
        </Text>

        {/* Head hunter troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/headHunterTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[50].level}</Text>
          </View>
        </Text>

        {/* Electro titan troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/electroTitanTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[56].level}</Text>
          </View>
        </Text>

        {/* Wall wrecker troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/wallWreckerTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[33].level}</Text>
          </View>
        </Text>

        {/* Battle blimp troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/battleBlimpTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[34].level}</Text>
          </View>
        </Text>

        {/* Stone slammer troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/stoneSlammerTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[40].level}</Text>
          </View>
        </Text>

        {/* Siege barracks troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/siegeBarracksTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[46].level}</Text>
          </View>
        </Text>

        {/* Log launcher troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/logLauncherTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[53].level}</Text>
          </View>
        </Text>

        {/* Flame flinger troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/flameFlingerTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[54].level}</Text>
          </View>
        </Text>

        {/* Battle drill troop */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/troops/battleDrillTroop.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.troops[55].level}</Text>
          </View>
        </Text>
      </ScrollView>

      {/* Spells sub heading */}
      <Text style={styles.subHeadingText}>Spells</Text>

      {/* All players spells levels */}
      <ScrollView
        style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        paddingTop={5}
      >
        {/* Lightning spell */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/spells/lightningSpell.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.spells[0].level}</Text>
          </View>
        </Text>

        {/* Healing spell */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/spells/healingSpell.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.spells[1].level}</Text>
          </View>
        </Text>

        {/* Rage spell */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/spells/rageSpell.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.spells[2].level}</Text>
          </View>
        </Text>

        {/* Jump spell */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/spells/jumpSpell.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.spells[3].level}</Text>
          </View>
        </Text>

        {/* Freeze spell */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/spells/freezeSpell.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.spells[4].level}</Text>
          </View>
        </Text>

        {/* Clone spell */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/spells/cloneSpell.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.spells[8].level}</Text>
          </View>
        </Text>

        {/* Invisibility spell */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/spells/invisibilitySpell.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.spells[11].level}</Text>
          </View>
        </Text>

        {/* Recall spell */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/spells/recallSpell.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.spells[12].level}</Text>
          </View>
        </Text>

        {/* Poison spell */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/spells/poisonSpell.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.spells[5].level}</Text>
          </View>
        </Text>

        {/* Earthquake spell */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/spells/earthquakeSpell.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.spells[6].level}</Text>
          </View>
        </Text>

        {/* Haste spell */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/spells/hasteSpell.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.spells[7].level}</Text>
          </View>
        </Text>

        {/* Skeleton spell */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/spells/skeletonSpell.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.spells[9].level}</Text>
          </View>
        </Text>

        {/* Bat spell */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/spells/batSpell.png")}
          />
          <View style={styles.border}>
            <Text style={styles.statText}>{data.spells[10].level}</Text>
          </View>
        </Text>
      </ScrollView>
    </View>
  );
};

export default PlayerArmyLevels;

const styles = StyleSheet.create({
  border: {
    backgroundColor: "#01579b",
    borderRadius: 10,
    borderColor: "#01579b",
    paddingLeft: 4,
    paddingRight: 4,
  },

  statText: {
    color: "white",
    fontSize: "12px",
    textAlign: "center",
    fontWeight: "700",
  },

  images: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },

  container: {
    backgroundColor: "#222",
    flexDirection: "row",
    paddingLeft: 20,
  },

  subHeadingText: {
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    color: "#FFFFFFB3",
    fontSize: "16px",
    backgroundColor: "#222",
    fontWeight: "700",
    textAlign: "centerLeft",
  },

  headingContainer: {
    backgroundColor: "#121212",
    height: 60,
    justifyContent: "center",
  },

  headingText: {
    color: "white",
    textAlign: "center",
    fontSize: "26px",
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "28px",
      },
    }),
  },
});
