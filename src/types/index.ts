
export type UserRole =
  | "branch_user"
  | "subdistrict_admin"
  | "city_admin"
  | "super_admin";

export type ReportStatus =
  | "pending_subdistrict"
  | "pending_city"
  | "approved"
  | "rejected";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  branch?: string;
  subdistrict?: string;
  city?: string;
}

export interface Report {
  id: string;
  title: string;
  date: string;
  content: string;
  total_sales: number;
  status: ReportStatus;
  branchId: string;
  branchName: string;
  subdistrictId: string;
  subdistrictName: string;
  cityId: string;
  cityName: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  branch_manager?: string; // Adding the snake_case version to match DB column
  comments?: Comment[];
  rejectionReason?: string;
  locationInfo: LocationInfo;
  productInfo: ProductInfo;
  expenseInfo: ExpenseInfo;
  incomeInfo: IncomeInfo;
}

export interface Comment {
  id: string;
  text: string;
  user_id: string;
  user_name: string;
  created_at: string;
}

export interface LocationInfo {
  cityName: string;
  districtName: string;
  branchName: string;
  branchManager: string;
}

export interface ProductInfo {
  initialStock: number;
  remainingStock: number;
  testers: number;
  rejects: number;
  sold: number;
}

export interface ExpenseInfo {
  employeeSalary: number;
  employeeBonus: number;
  cookingOil: number;
  lpgGas: number;
  plasticBags: number;
  tissue: number;
  soap: number;
  otherExpenses: OtherExpense[];
  totalExpenses: number;
}

export interface OtherExpense {
  id: string;
  description: string;
  amount: number;
}

export interface IncomeInfo {
  cashReceipts: number;
  transferReceipts: number;
  remainingIncome: number;
  totalIncome: number;
}

export interface SalesItem {
  id: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}
