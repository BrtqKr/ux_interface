import React from "react";
import HomeScreen from "../screens/HomeScreen";
import StaticTabBar from "../components/StaticNavBar";
import NavBar from "../components/NavBar";
import SearchScreen from "./screens/SearchScreen";
import ProfileScreen from "./screens/ProfileScreen";

export const Home = () => <HomeScreen />;
export const StaticNav = () => <StaticTabBar />;
export const NavBar = () => <NavBar />;
export const Search = () => <SearchScreen />;
export const Stats = () => <StatsScreen />;
export const Profile = () => <ProfileScreen />;
