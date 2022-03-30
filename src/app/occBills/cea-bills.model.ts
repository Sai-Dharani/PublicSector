export interface Currency {
    active: boolean;
    isocode: string;
    name: string;
    symbol: string;
}

export interface Customer {
    name: string;
    uid: string;
}

export interface PaidBy {
    name: string;
    uid: string;
}

export interface Country {
    isocode: string;
    name: string;
}

export interface Region {
    countryIso: string;
    isocode: string;
    isocodeShort: string;
    name: string;
}

export interface BillingAddress {
    cellphone: string;
    companyName: string;
    country: Country;
    defaultAddress: boolean;
    district: string;
    email: string;
    firstName: string;
    formattedAddress: string;
    id: string;
    lastName: string;
    line1: string;
    line2: string;
    phone: string;
    postalCode: string;
    region: Region;
    shippingAddress: boolean;
    title: string;
    titleCode: string;
    town: string;
    visibleInAddressBook: boolean;
}

export interface CardType {
    code: string;
    name: string;
}

export interface PaymentInfo {
    accountHolderName: string;
    billingAddress: BillingAddress;
    cardNumber: string;
    cardType: CardType;
    defaultPayment: boolean;
    expiryMonth: string;
    expiryYear: string;
    id: string;
    issueNumber: string;
    saved: boolean;
    startMonth: string;
    startYear: string;
    subscriptionId: string;
}

export interface Transaction {
    outstandingAmount: number;
    overPaidAmount: number;
    paidAmount: number;
    paidAt: Date;
    paidBy: PaidBy;
    paymentInfo: PaymentInfo;
    receiptId: number;
    transactionId: string;
}

export interface Message {
    longMessage: string;
    messageCondition: string;
    shortMessage: string;
}

export interface Type {
    code: string;
    description: string;
    isOverPaymentAllowed: boolean;
    isOverduePaymentAllowed: boolean;
    isPartPaymentAllowed: boolean;
    isPaymentAllowed: boolean;
    messages: Message[];
    name: string;
}

export interface Bill {
    code: number;
    createdAt: Date;
    currency: Currency;
    customer: Customer;
    customerReferenceNumber: string;
    description: string;
    displayBillId: string;
    dueAt: Date;
    duration: number;
    email: string;
    isOverDue: boolean;
    lastName: string;
    outstandingAmount: number;
    overPaidAmount: number;
    paymentStatus: string;
    paymentType: string;
    totalAmount: number;
    transactions: Transaction[];
    type: Type;
    url: string;
}

export interface Pagination {
    currentPage: number;
    pageSize: number;
    sort: string;
    totalPages: number;
    totalResults: number;
}

export interface Sort {
    code: string;
    name: string;
    selected: boolean;
}

export interface ceaBill {
    bills: Bill[];
    pagination: Pagination;
    sorts: Sort[];
}


