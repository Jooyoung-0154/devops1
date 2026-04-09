import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosInstance";
import type { Product } from "../types/Product";
import "./ProductList.css";

const ProductList: React.FC = () => {
  const [list, setList] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get<Product[]>("")
      .then((res) => setList(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="list-container">
      <h2 className="list-title">상품목록</h2>
      <table className="board-table">
        <thead>
          <tr>
            <th style={{ width: "10%" }}>번호</th>
            <th style={{ width: "50%" }}>이름</th>
            <th style={{ width: "20%" }}>가격</th>
            <th style={{ width: "20%" }}>수량</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? (
            list.map((product) => (
              <tr key={product.num}>
                <td>{product.num}</td>
                <td style={{ textAlign: "left" }}>
                  <Link className="title-link" to={`/product/${product.num}`}>
                    {product.name}
                  </Link>
                </td>
                <td>{product.price}원</td>
                <td>{product.amount}개</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}> 게시글이 존재하지 않습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="btn-area">
        <Link to={"/write"}>
          <button className="btn-write">상품 등록</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
