export interface Currency {
    isocode: string;
    symbol: string;
}
export interface Type {
    description: string;
    isPaymentAllowed: boolean;
}
export interface Bill {
    code: number;
    createdAt: Date;
    currency: Currency;
    displayBillId: string;
    dueAt: Date;
    isOverDue: boolean;
    outstandingAmount: number;
    paymentStatus: string;
    totalAmount: number;
    type: Type;
}
export interface Pagination {
    currentPage: number;
    pageSize: number;
    totalResults: number;
}
export interface ceaBill {
    bills: Bill[];
    pagination: Pagination;
}


