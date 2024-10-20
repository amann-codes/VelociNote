import React, { useEffect, useState } from "react";
import Tooltip from "./Tooltip";

interface Organization {
  id: string;
  name: string;
}

export default function OrgFace() {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const res = await fetch("/api/organization", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch organizations");
        }

        const data = await res.json();
        setOrganizations(data.orgs);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchOrganizations();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };
  const Image =({org}:any) =>{
    return <div className="bg-gradient-to-br">
      {getInitials(org.name)}
    </div>
  }
  return (
    <div className="flex flex-col gap-3">
      {organizations.map((org) => (
        <Tooltip text={org.name}>
          <div key={org.id}>
            <Image />
          </div>
        </Tooltip>
      ))}
    </div>
  );
}
