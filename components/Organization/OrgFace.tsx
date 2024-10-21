import React, { useEffect, useState } from "react";
import Tooltip from "./Tooltip";
import Icon from "../Icon";
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
  return (
    <div className="flex flex-col gap-3">
      {organizations.map((items, index) => (
        <div key={index}>
          <Tooltip text={items.name}>
            <Icon name={items.name} size={10} font="2xl" />
          </Tooltip>
        </div>
      ))}
    </div>
  );
}
