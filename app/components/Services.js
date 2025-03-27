import Image from "next/image";
import { useCallback, useState } from "react";
import Button from "./form/Button";
import { IoIosArrowDown } from "react-icons/io";
import AddPackageModal from "./modal/AddPackageModal";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  prevStep,
  nextStep,
} from "@/lib/features/appointment/createAppointmentSlice";
import { useDispatch } from "react-redux";

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

export const Services = () => {
  const [isOpenAddPackageModal, setIsOpenAddPackageModal] = useState(false);
  const [selectedPackages, setSelectedPackages] = useState([]);
  const dispatch = useDispatch();

  const checkNextStep = () => {
    dispatch(nextStep());
  };

  const checkPrevStep = () => {
    dispatch(prevStep());
  };

  const table = useReactTable({
    data: selectedPackages,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const renderPackageSelected = useCallback(() => {
    if (selectedPackages?.length !== 0) {
      return (
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
                <tr key={row.id} className="h-15 border-b border-b-[#2F323E]">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                  <td>
                    <RiDeleteBin6Line
                      color="#FA1717"
                      size={24}
                      className="cursor-pointer"
                      onClick={() =>
                        setSelectedPackages(
                          selectedPackages.filter(
                            (selected) => selected.id !== row.original.id
                          )
                        )
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return (
      <div className="flex flex-col justify-center items-center gap-2">
        <Image src="/empty.png" alt="empty" width={100} height={100} priority />
        <p>The selected packages will appear here</p>
      </div>
    );
  }, [selectedPackages]);

  return (
    <div>
      <p className="text-[30px] font-bold mb-5">Services</p>
      <div className="w-full bg-[#18181B] rounded-xl p-4 relative">
        <form>
          <div className="flex flex-col">
            <p className="text-sm font-bold mb-2">
              Add Packages <span className="text-[#F64D3C]">*</span>
            </p>
            <div className="flex justify-between items-center gap-2 mb-8">
              <div
                onClick={() => setIsOpenAddPackageModal(true)}
                className="flex justify-between items-center flex-1 h-12 rounded-lg bg-[#2F323E] px-4 cursor-pointer"
              >
                <p className="text-[#7F859F]">Select</p>
                <IoIosArrowDown size={20} color="7F859F" />
              </div>
            </div>
            {renderPackageSelected()}
            <div className="flex justify-between items-center mt-8">
              <Button
                label="Back"
                variant="outlined"
                onClick={() => checkPrevStep()}
              />
              <Button label="Next" onClick={() => checkNextStep()} />
            </div>
          </div>
        </form>
      </div>
      <AddPackageModal
        isOpen={isOpenAddPackageModal}
        setIsOpen={setIsOpenAddPackageModal}
        selectedPackages={selectedPackages}
        setSelectedPackages={setSelectedPackages}
      />
    </div>
  );
};

export default Services;
