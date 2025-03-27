import Button from "../form/Button";
import { GoPencil } from "react-icons/go";
import { IoMdLink } from "react-icons/io";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

const defaultData = [
  {
    id: 1,
    date: "January 15, 2025",
    status: "completed",
    amount: "$200",
    type: "Credit Card",
    linkedAppointment: "link",
    linkedProposal: "view",
  },
  {
    id: 2,
    date: "January 15, 2025",
    status: "fail",
    amount: "$200",
    type: "Credit Card",
    linkedAppointment: "link",
    linkedProposal: "view",
  },
  {
    id: 3,
    date: "January 15, 2025",
    status: "completed",
    amount: "$200",
    type: "Cash",
    linkedAppointment: "link",
    linkedProposal: "view",
  },
  {
    id: 4,
    date: "January 15, 2025",
    status: "completed",
    amount: "$200",
    type: "Credit Card",
    linkedAppointment: "link",
    linkedProposal: "view",
  },
  {
    id: 5,
    date: "January 15, 2025",
    status: "completed",
    amount: "$200",
    type: "Credit Card",
    linkedAppointment: "link",
    linkedProposal: "view",
  },
];

const columnHelper = createColumnHelper();

const renderStatus = (status) => {
  switch (status) {
    case "completed":
      return (
        <div className="bg-[#578F4108] border border-[#578F4140] w-[100px] h-[33px] rounded-md flex justify-center items-center">
          <p className="text-sm text-[#578F41]">Completed</p>
        </div>
      );
    case "fail":
      return (
        <div className="bg-[#FA171708] border border-[#FA171740] w-[100px] h-[33px] rounded-md flex justify-center items-center">
          <p className="text-sm text-[#FA1717]">Fail</p>
        </div>
      );
    default:
      return null;
  }
};

const renderLinked = (typeLink) => {
  switch (typeLink) {
    case "link":
      return (
        <div className="flex gap-2 items-center cursor-pointer">
          <p className="text-sm font-bold text-[#2E7FF1]">Link</p>
          <IoMdLink color="#2E7FF1" size={16} />
        </div>
      );
    case "view":
      return (
        <div className="flex gap-2 items-center cursor-pointer">
          <p className="text-sm font-bold">View</p>
          <GoPencil color="#2E7FF1" size={16} />
        </div>
      );
    default:
      return null;
  }
};

const columns = [
  columnHelper.accessor("date", {
    header: () => <span className="pl-4">Date</span>,
    cell: ({ row }) => (
      <div className="flex gap-4 pl-4 flex-col items-start my-4">
        <p>{row.original.date}</p>
        {renderStatus(row.original.status)}
      </div>
    ),
  }),
  columnHelper.accessor("amount", {
    header: () => "Amount",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("type", {
    header: () => "Type",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("linkedAppointment", {
    header: () => (
      <p>
        Linked <br /> Appointment
      </p>
    ),
    cell: (info) => renderLinked(info.renderValue()),
  }),
  columnHelper.accessor("linkedProposal", {
    header: () => (
      <p>
        Linked <br /> Proposal
      </p>
    ),
    cell: (info) => renderLinked(info.renderValue()),
  }),
];

export const PaymentCard = () => {
  const [data, setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full bg-[#18181B] rounded-xl p-4 relative flex-1">
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold">Payment</p>
        <Button label="Add new payment" variant="outlined" />
      </div>
      <div className="border border-[#2E7FF1] rounded-xl bg-[#0F0F0F] p-4 flex flex-col gap-2 my-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 text-[#7F859F] items-center">
            <GoPencil />
            <p>Total Paid</p>
          </div>
          <p className="font-bold">$1000</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 text-[#7F859F] items-center">
            <GoPencil />
            <p>Remaining Due</p>
          </div>
          <p className="font-bold text-[#2E7FF1]">$600</p>
        </div>
      </div>
      <div className="border border-[#2F323E] rounded-xl overflow-hidden">
        <table className="w-full text-sm ">
          <thead className="bg-[#212226] h-15 font-bold text-left text-[#6E6F76]">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                onClick={() => handleRowClick(row)}
                key={row.id}
                className="h-15 border-b border-b-[#2F323E]"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentCard;
