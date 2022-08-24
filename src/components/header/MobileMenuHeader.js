import React from "react";
import { FaHome, FaDollarSign, FaCar, FaPhoneAlt, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./mobile.css";

function MobileMenuHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [tabs, setTabs] = React.useState(1);
  console.log(tabs);
  return (
    <p></p>
  );
}

export default MobileMenuHeader;
