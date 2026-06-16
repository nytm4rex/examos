// screens/more/ShopScreen.js

import React from "react";

import {
  ScrollView,
} from "react-native";

import InfoCard from "../../components/cards/InfoCard";
import SectionHeader from "../../components/common/SectionHeader";

import { useShop } from "../../context/ShopContext";

import { GLOBAL_STYLES } from "../../styles/globalStyles";

export default function ShopScreen() {
  const {
    berri,
    items,
    purchaseItem,
  } = useShop();

  return (
    <ScrollView
      style={GLOBAL_STYLES.screen}
    >
      <InfoCard
        title="Berri Balance"
        value={berri}
      />

      <SectionHeader
        title="Shop Items"
      />

      {items.map((item) => (
        <InfoCard
          key={item.id}
          title={item.name}
          subtitle={item.description}
          value={`${item.cost} 🍓`}
          onPress={() =>
            purchaseItem(item.id)
          }
        />
      ))}
    </ScrollView>
  );
}