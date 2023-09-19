"use client";
import CategoryButton from "@/components/ui/CategoryButton";
import { useState } from "react";
import EmployeeForm from "@/components/units/EmployeeForm";
import AdminForm from "@/components/units/AdminForm";
import AuthLayout from "@/layout/authlayout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores/store";

const AuthPage = () => {
  const dispatch = useDispatch();

  const category = useSelector(
    (state: RootState) => state.formCategories.category
  );
  const subCategory = useSelector(
    (state: RootState) => state.formCategories.subCategory
  );
  return (
    <AuthLayout>
      <div className="space-y-4">
        {category == "RMB" && subCategory == "Employee" && (
          <EmployeeForm  category={category} subCategory={subCategory} />
        )}
        {category == "RMB" && subCategory == "Admin" && (
          <AdminForm category="RMB" />
        )}
        {category == "Company" && subCategory == "Employee" && (
          <EmployeeForm category={category} subCategory={subCategory} />
        )}
        {category == "Company" && subCategory == "Admin" && (
          <AdminForm category="Company" />
        )}

        {category == "Rescue Team" && subCategory == "Employee" && (
          <EmployeeForm category={category} subCategory={subCategory} />
        )}
        {category == "Rescue Team" && subCategory == "Admin" && (
          <AdminForm category="Rescue Team" />
        )}
      </div>
    </AuthLayout>
  );
};
export default AuthPage;
