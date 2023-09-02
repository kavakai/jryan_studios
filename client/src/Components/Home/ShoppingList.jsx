import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../Item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../state/state";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?sort[0]=category&sort[1]=name&populate=deep",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const feathersItems = items.filter(
    (item) => item.attributes.category === "feathers"
  );
  const windowVasesItems = items.filter(
    (item) => item.attributes.category === "windowVases"
  );
  const windowPanelsItems = items.filter(
    (item) => item.attributes.category === "windowPanels"
  );
  const lightCatchersItems = items.filter(
    (item) => item.attributes.category === "lightCatchers"
  );
  const placesOfInspirationItems = items.filter(
    (item) => item.attributes.category === "placesOfInspiration"
  );
  
  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
      My Beautiful Products
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="FEATHERS" value="feathers" />
        <Tab label="WINDOW VASES" value="windowVases" />
        <Tab label="WINDOW PANELS" value="windowPanels" />
        <Tab label="LIGHT CATCHERS" value="lightCatchers" />
        <Tab label="PLACES OF INSPIRATION" value="placesOfInspiration" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} width={undefined} />
          ))}
        {value === "feathers" &&
          feathersItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} width={undefined} />
          ))}
        {value === "windowVases" &&
          windowVasesItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} width={undefined} />
          ))}
        {value === "windowPanels" &&
          windowPanelsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} width={undefined} />
          ))}
        {value === "lightCatchers" &&
          lightCatchersItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} width={undefined} />
          ))}
        {value === "placesOfInspiration" &&
          placesOfInspirationItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} width={undefined} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
