import product1Img from "@/assets/images/apps/ecommerce/products/1.jpg";
import product2Img from "@/assets/images/apps/ecommerce/products/2.jpg";
import product3Img from "@/assets/images/apps/ecommerce/products/3.jpg";
import product4Img from "@/assets/images/apps/ecommerce/products/4.jpg";
import avatar1 from "@/assets/images/avatars/1.png";
import avatar2 from "@/assets/images/avatars/2.png";
import avatar3 from "@/assets/images/avatars/3.png";
import avatar4 from "@/assets/images/avatars/4.png";

import circleDollarSignIcon from "@iconify/icons-lucide/circle-dollar-sign";
import eraserIcon from "@iconify/icons-lucide/eraser";
import packageIcon from "@iconify/icons-lucide/package";
import usersIcon from "@iconify/icons-lucide/users";

import DateUtil from "@/helpers/utils/date";
import {
    IEcommerceDashboardCounter,
    IEcommerceDashboardMessage,
    IEcommerceDashboardOrder,
    IEcommerceDashboardRevenueDuration,
    IEcommerceDashboardRevenueStat,
    IEcommerceDashboardUserInteraction,
} from "@/types/dashboards/ecommerce";

const fRevenues = [15, 24, 21, 28, 30, 40, 22, 32, 34, 20];
const fExpenses = [10, 12, 14, 16, 18, 20, 14, 16, 18, 12];
// const fNetIncome = fRevenues - fExpenses;


export const getEcommerceDashboardCounterData: IEcommerceDashboardCounter[] = [
    {
        icon: circleDollarSignIcon,
        amount: 587.54,
        title: "Revenue",
        changes: 10.8,
        changesAmount: 112.58,
        inMoney: true,
    },
    {
        icon: packageIcon,
        amount: 4500,
        title: "Sales",
        changes: 21.2,
        changesAmount: 25,
        inMoney: false,
    },
    {
        icon: usersIcon,
        amount: 2200,
        title: "Customer",
        changes: -10.2,
        changesAmount: -312,
        inMoney: false,
    },
    {
        icon: eraserIcon,
        amount: 112.54,
        title: "Spending",
        changes: 8.5,
        changesAmount: 54.65,
        inMoney: true,
    },
];

export const getEcommerceDashboardRevenueStatData: Record<
    IEcommerceDashboardRevenueDuration,
    IEcommerceDashboardRevenueStat
> = {
    year: {
        amount: fRevenues.reduce((a,c) => a+c, 0)*12,
        percent: 3.24,
        series: fExpenses.map((exp, index) => {
            return {
                date: DateUtil.minusYears(10 - index),
                expenses: exp*12,
                revenues: fRevenues[index]*12,
                // netIncome: fNetIncome[index],
            };
        }),
    },
    quarter: {
        amount: fRevenues.reduce((a,c) => a+c, 0)*3,
        percent: 2.14,
        series: fExpenses.map((exp, index) => {
            return {
                date: DateUtil.minusMonths(10 - index*4),
                expenses: exp*3,
                revenues: fRevenues[index],
                // netIncome: fNetIncome[index],
            };
        }),
    },
    month: {
        amount: fRevenues.reduce((a,c) => a+c, 0),
        percent: 4.59,
        series: fExpenses.map((exp, index) => {
            return {
                date: DateUtil.minusMonths(10 - index),
                expenses: exp - 2*[2, 2, -1, 3, 2, -1, -2, 4, 3, -5][index],
                revenues: fRevenues[index] - 2*[1, 2, 4, -3, 5, -2, 2, -1, 3, 2][index],
                // netIncome: fNetIncome[index],
            };
        }),
    },
};

export const getEcommerceDashboardMessageData: IEcommerceDashboardMessage[] = [
    {
        image: avatar1,
        name: "Mia Johnson",
        date: DateUtil.minusMinutes(0),
        message: "It's called 'Dreamscape.' A must-watch!",
    },
    {
        image: avatar2,
        name: "Ethan Patel",
        date: DateUtil.minusMinutes(100),
        message: "Just got a new book. Excited to start reading.",
    },
    {
        image: avatar3,
        name: "Sophia Nguyen",
        date: DateUtil.minusMinutes(200),
        message: "How's your day going?",
    },
    {
        image: avatar4,
        name: "Emily Chen",
        date: DateUtil.minusMinutes(300),
        message: "Did you see that amazing sunset yesterday?",
    },
];

export const getEcommerceDashboardOrderData: IEcommerceDashboardOrder[] = [
    {
        amount: fRevenues.reduce((a,c) => a+c, 0)*12,
        status: "delivered",
        name: "Revenue",
        image: product1Img,
        date: DateUtil.minusDays(1),
        category: "Fashion",
    },
    {
        amount: fExpenses.reduce((a,c) => a+c, 0)*12,
        status: "on_going",
        name: "Expenses",
        image: product2Img,
        date: DateUtil.minusDays(4),
        category: "Daily Need",
    },
    // {
    //     amount: 99,
    //     status: "delivered",
    //     name: "Freeze air ",
    //     image: product3Img,
    //     date: DateUtil.minusDays(9),
    //     category: "Cosmetic",
    // },
    // {
    //     amount: 99,
    //     status: "cancelled",

    //     name: "Ladies's shoes",
    //     image: product4Img,
    //     date: DateUtil.minusDays(3),
    //     category: "Fashion",
    // },
];

export const getEcommerceDashboardUserInteractionData: IEcommerceDashboardUserInteraction[] = [
    {
        title: "Users",
        amount: "427",
        percent: 3.15,
    },
    {
        title: "Sessions",
        amount: "34",
        percent: -2.78,
    },
    {
        title: "Bounce Rate",
        amount: "40.5%",
        percent: 5.14,
    },
];
