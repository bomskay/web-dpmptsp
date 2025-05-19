"use client";

import { useState } from "react";
import UploadImage from "@/components/admin/uploadImage";
import DeleteImage from "@/components/admin/deleteImage";
import Logout from "@/components/admin/logout";

export default function AdminDashboard() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleRefresh = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div>
      <UploadImage onUploadSuccess={handleRefresh} />
      <DeleteImage refreshTrigger={refreshTrigger} onDeleteSuccess={handleRefresh} />
    </div>
  );
}
