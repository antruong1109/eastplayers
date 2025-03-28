import Popup from "reactjs-popup";
import Image from "next/image";
import Button from "../form/Button";
import { IoMdClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import CheckBox from "../form/CheckBox";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { isEmpty } from "lodash";

const categoryService = [
  "All",
  "Services 1",
  "Services 2",
  "Services 3",
  "Services 4",
  "Services 5",
];

const defaultData = [
  {
    id: 1,
    image: "/vehicle.png",
    name: "This is a product name 1",
    service: "Service name",
    price: "$100.00",
    estimateTime: "2 hours",
  },
  {
    id: 2,
    image: "/vehicle.png",
    name: "This is a product name 2",
    service: "Service name",
    price: "$100.00",
    estimateTime: "2 hours",
  },
  {
    id: 3,
    image: "/vehicle.png",
    name: "This is a product name 3",
    service: "Service name",
    price: "$100.00",
    estimateTime: "2 hours",
  },
  {
    id: 4,
    image: "/vehicle.png",
    name: "This is a product name 4",
    service: "Service name",
    price: "$100.00",
    estimateTime: "2 hours",
  },
  {
    id: 5,
    image: "/vehicle.png",
    name: "This is a product name 5",
    service: "Service name",
    price: "$100.00",
    estimateTime: "2 hours",
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("info", {
    header: () => <span className="pl-4"> Package Name</span>,
    cell: ({ row }) => (
      <div className="flex items-center gap-2 pl-4 ">
        <Image
          src={row.original.image}
          alt="vehicle"
          width={35}
          height={35}
          priority
        />
        <span className="font-bold">{row.original.name}</span>
      </div>
    ),
  }),
  columnHelper.accessor("service", {
    header: () => "Service",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("price", {
    header: () => "Price",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("estimateTime", {
    header: () => "Estimate time",
    cell: (info) => info.renderValue(),
  }),
];

export const AddPackageModal = ({
  isOpen,
  setIsOpen,
  selectedPackages,
  setSelectedPackages,
  setIsErrorSelectPackage,
}) => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [data, setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleRowClick = (row) => {
    setIsErrorSelectPackage(false);
    setSelectedPackages((prev) => {
      const exists = prev.some(
        (packageSelected) => packageSelected.id === row.original.id
      );
      return exists
        ? prev.filter(
            (packageSelected) => packageSelected.id !== row.original.id
          )
        : [...prev, row.original];
    });
  };

  return (
    <Popup
      modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      contentStyle={{
        marginRight: 0,
        height: "100%",
        width: "70%",
        maxWidth: "1120px",
      }}
    >
      <div className="bg-[#18181B] h-full p-6">
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
        <p className="text-xl font-bold mb-4">Add Package</p>
        <div className="flex justify-between items-center gap-2 relative mb-4">
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
        </div>
        <div className="flex gap-2 mb-4">
          {categoryService.map((item) => {
            return (
              <Button
                key={item}
                variant={
                  categoryFilter === item ? "filter-active" : "filter-white"
                }
                label={item}
                onClick={() => setCategoryFilter(item)}
              />
            );
          })}
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
                  <th>Action</th>
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                  <td>
                    <CheckBox
                      onChange={() => handleRowClick(row)}
                      isCheck={selectedPackages.some(
                        (u) => u.id === row.original.id
                      )}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Button
            label="Cancel"
            variant="outlined"
            onClick={() => {
              setSelectedPackages([]);
              setIsOpen(false);
            }}
          />
          <Button
            label={"Selected" + ` (${selectedPackages.length})`}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </div>
      </div>
    </Popup>
  );
};

export default AddPackageModal;
