import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axiosInstance";
import type { Product } from "../types/Product";
import "./ProductDetail.css";

const ProductDetail: React.FC = () => {
  const { num } = useParams<{ num: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    api
      .get<Product>(`/${Number(num)}`)
      .then((res) => setProduct(res.data))
      .catch(console.error);
  }, [num]);
  const handleUpdate = async () => {
    if (!product) return;
    await api.put(`/${num}`, product);
    alert("수정완료");
    navigate("/");
  };

  const handleDelete = async () => {
    if (!window.confirm("삭제하시겠습니까")) return;
    await api.delete(`/${num}`);
    alert("삭제완료");
    navigate("/");
  };
  if (!product) return <div className="detail-page"> Loading..</div>;
  return (
    <div className="detail-page">
      <div className="detail-card">
        <h2 className="">제품 상세</h2>
        <div className="form-group">
          <label>번호</label>
          <input
            className="input-field"
            value={String(product.num) || ""}
            onChange={(e) =>
              setProduct({ ...product, num: parseInt(e.target.value) })
            }
          />
        </div>
        <div className="form-group">
          <label>제품명</label>
          <input
            className="input-field"
            value={product.name || ""}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>가격</label>
          <input
            className="input-field"
            value={String(product.price) || ""}
            onChange={(e) =>
              setProduct({ ...product, price: parseInt(e.target.value) })
            }
          />
        </div>
        <div className="form-group">
          <label>수량</label>
          <input
            className="input-field"
            value={String(product.amount) || ""}
            onChange={(e) =>
              setProduct({ ...product, amount: parseInt(e.target.value) })
            }
          />
        </div>

        <div className="button-group">
          <button className="btn btn-list" onClick={() => navigate("/")}>
            목록으로
          </button>
          <button className="btn btn-update" onClick={handleUpdate}>
            수정
          </button>
          <button className="btn btn-delete" onClick={handleDelete}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
