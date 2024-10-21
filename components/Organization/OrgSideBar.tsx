"use client";
import { useState, useEffect } from "react";
import Icon from "../Icon";

interface Organization {
  id: string;
  name: string;
}

export const OrgSideBar = () => {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [orgName, setOrgName] = useState("")
  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const res = await fetch("/api/organization", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setOrganizations(data.orgs);
      } catch (err) {
        console.log(err);
      }
    };

    fetchOrganizations();
  }, []);
  return (
    <div className="w-[200px] mx-2 mt-4">
      <span className="text-2xl font-serif bg-gray-300 rounded-md border-2 border-gray-500 p-2">
        VelociNote
      </span>
      <select className="mt-8">
        {organizations.map((items, index) => {
          return <option key={index} value={items.id} onClick={()=>setOrgName(items.id)}>{items.name}</option>;
        })}
      </select>
      <div className="text-red-700 font-bold">
        org
      </div>
    </div>
  );
};
