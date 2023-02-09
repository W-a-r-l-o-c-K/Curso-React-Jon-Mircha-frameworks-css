import React from "react";
import PrimarySearchAppBar from "./AppBar";
import MediaCard from "./MaterialCard";
import PersistentDrawerLeft from "./PersistentDrawer";


export default function MaterialUI() {
    return (
        <>
            <PrimarySearchAppBar />
            <PersistentDrawerLeft />
            <h2>Material UI</h2>
            <MediaCard />
        </>
    );
}