package org.cloud.service;

import java.util.List;

import org.cloud.dto.ProductDTO;
import org.cloud.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	private ProductMapper productMapper;
	
	@Override
	public List<ProductDTO> productList() throws Exception {
		// TODO Auto-generated method stub
		return productMapper.productList();
	}
	
	@Override
	public int insertProduct(ProductDTO product) throws Exception {
		// TODO Auto-generated method stub
		productMapper.insertProduct(product);
		return 0;
	}
	
	@Override
	public ProductDTO productDetail(int num) throws Exception {
		// TODO Auto-generated method stub
		ProductDTO product = productMapper.productDetail(num);
		return product;
	}
	
	@Override
	public int updateProduct(ProductDTO product) throws Exception {
		// TODO Auto-generated method stub
		productMapper.updateProduct(product);
		return 0;
	}
	
	@Override
	public int deleteProduct(int num) throws Exception {
		// TODO Auto-generated method stub
		productMapper.deleteProduct(num);
		return 0;
	}
}





