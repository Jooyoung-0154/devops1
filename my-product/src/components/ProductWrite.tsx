import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosInstance";
import "./ProductWrite.css";

const ProductWrite: React.FC = () => {
  const navigate = useNavigate();

  const [product1, setProduct] = useState({
    name: "",
    price: "",
    amount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product1, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!product1.name || !product1.price || !product1.amount) {
      alert("빈칸을 입력하세요.");
      return;
    }

    try {
      await api.post("/write", product1);
      alert("글을 작성했음");
      navigate("/");
    } catch (error) {
      console.error("에러", error);
      alert("에러");
    }
  };
  return (
    <div className="write-container">
      <h2 className="write-title"> 새 상품 등록</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label> 상품명</label>
          <input
            name="name"
            className="form-control"
            value={product1.name}
            onChange={handleChange}
            placeholder="상품명 등록"
          />
        </div>
        <div>
          <label> 가격</label>
          <input
            name="price"
            className="form-control"
            value={product1.price}
            onChange={handleChange}
            placeholder="가격 입력"
          />
        </div>
        <div>
          <label> 수량</label>
          <input
            name="amount"
            className="form-control"
            value={product1.amount}
            onChange={handleChange}
            placeholder="수량 입력"
          />
        </div>
        <div className="btn-area">
          <button type="submit" className="btn-submit">
            {" "}
            등록하기
          </button>
          <button
            className="btn-cancle"
            type="button"
            onClick={() => navigate("/")}
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductWrite;
