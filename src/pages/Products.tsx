import { Link } from "react-router-dom";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { contextMenuItems, productGrid } from "../data/dummy";
import { Button, Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Products = () => {
  const { productList, currentColor } = useStateContext();

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Product List">
        <Link to="/orders">
          <Button
            color="white"
            bgColor={currentColor}
            text="Orders"
            borderRadius="10px"
            size="md"
          />
        </Link>
      </Header>
      <GridComponent
        id="gridcomp"
        dataSource={productList}
        allowPaging={true}
        allowSorting={true}
        allowPdfExport={true}
      >
        <ColumnsDirective>
          {productGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Products;
