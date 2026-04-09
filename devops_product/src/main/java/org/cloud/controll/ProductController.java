package org.cloud.controll;

import java.util.List;

import org.cloud.dto.ProductDTO;
import org.cloud.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/product")
public class ProductController {

	@Autowired	
	private ProductService productService;
	
	@GetMapping("/list")
	public String openProductList(Model model) throws Exception {
		List<ProductDTO> list = productService.productList();
		model.addAttribute("list", list);
		
		return "productList";
	}
	
	@GetMapping("/write")
	public String openProductWrite() throws Exception {
		return "productWriteUI";
	}
	
	@PostMapping("/insert")
	public String insertProduct(ProductDTO product) throws Exception {
		productService.insertProduct(product);
		return "redirect:/product/list";
	}
	
	@GetMapping("/detail")
	public String openProductDetail(@RequestParam("num") int num, Model model) throws Exception{
		
		ProductDTO product = productService.productDetail(num);
		model.addAttribute("product", product);
		
		return "productDetail";
	}
	
	@PostMapping("/update")
	public String updateProduct(ProductDTO product) throws Exception {
		productService.updateProduct(product);
		
		return "redirect:/product/list";
	}
	
	@PostMapping("/delete")
	public String deleteProduct(@RequestParam("num") int num) throws Exception {
		
		productService.deleteProduct(num);
		return "redirect:/product/list";
	}
}









