import Popup from "reactjs-popup";
import Button from "../form/Button";
import { IoMdClose, IoMdCheckmark } from "react-icons/io";
import { FiPlus, FiSearch } from "react-icons/fi";
import { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import CheckBox from "../form/CheckBox";

const defaultData = [
  {
    name: "Client name",
    email: "abc@gmail.com",
    phone: "(+1) 561-555-7689",
  },
  {
    name: "Client name",
    email: "abc@gmail.com",
    phone: "(+1) 561-555-7689",
  },
  {
    name: "Client name",
    email: "abc@gmail.com",
    phone: "(+1) 561-555-7689",
  },
  {
    name: "Client name",
    email: "abc@gmail.com",
    phone: "(+1) 561-555-7689",
  },
  {
    name: "Client name",
    email: "abc@gmail.com",
    phone: "(+1) 561-555-7689",
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("name", {
    header: () => <span className="pl-4">Name</span>,
    cell: (info) => (
      <span className="pl-4 font-bold">{info.renderValue()}</span>
    ),
  }),
  columnHelper.accessor("email", {
    header: () => "Email",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("phone", {
    header: () => "Phone",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("action", {
    header: () => "Action",
    cell: () => (
      <div>
        <CheckBox />
      </div>
    ),
  }),
];

export const ContactModal = ({ isOpen, setIsOpen, setAddContactModal }) => {
  const [data, setData] = useState(() => [...defaultData]);
  console.log("🚀 ~ ContactModal ~ data:", data);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Popup
      modal
      open={isOpen}
      // open={true}
      onClose={() => setIsOpen(false)}
      contentStyle={{
        marginRight: 0,
        height: "100%",
        width: "70%",
        maxWidth: "1120px",
      }}
    >
      <div className=" bg-[#18181B] h-full p-6">
        <IoMdClose
          size={24}
          color="#7F859F"
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            right: "24px",
            top: "24px",
            cursor: "pointer",
          }}
        />
        <p className="text-xl font-bold mb-4">Contact</p>
        <div className="flex justify-between items-center gap-2 relative mb-8">
          <input
            type="text"
            className="h-12 rounded-lg bg-[#2F323E] px-4 pl-12 text-sm border-none outline-none flex-1"
            placeholder="Search by name, phone number or email"
          />

          <FiSearch
            color="#7F859F"
            size={20}
            style={{
              position: "absolute",
              top: "14px",
              left: "16px",
              zIndex: 1,
            }}
          />
          <div
            onClick={() => setAddContactModal(true)}
            className="h-12 w-12 border border-[#058CD7] flex justify-center items-center rounded-lg cursor-pointer"
          >
            <FiPlus size={20} color="#058CD7" />
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
                <tr key={row.id} className="h-15 border-b border-b-[#2F323E]">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Button
            label="Cancel"
            variant="outlined"
            onClick={() => setIsOpen(false)}
          />
          <Button label="Select" />
        </div>
      </div>
    </Popup>
  );
};

export default ContactModal;
