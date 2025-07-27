package com.bharath.EcommerceWeb.controller;

import com.bharath.EcommerceWeb.model.Product;
import com.bharath.EcommerceWeb.service.ProductService;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/product")
@CrossOrigin
public class ProductController {

    @Autowired
    ProductService service;

    @GetMapping("getAllProducts")
    public List<Product> getAllProducts(){
//        System.out.println(service.getAllProducts());
        return service.getAllProducts();
    }

    @GetMapping("getProductById/{ID}")
    public ResponseEntity<Product> getProductById(@PathVariable int ID){
        Product product = service.getProductById(ID);
        if (product.getId() > 0) {
            return new ResponseEntity<>(product, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("saveProduct")
    public ResponseEntity<?> saveProduct(@RequestPart("product") Product product, @RequestPart("imageFile") MultipartFile imageFile){
        Product savedProd = null;
        try{
            savedProd = service.addOrUpdateProduct(product, imageFile);
            return new ResponseEntity<>(savedProd, HttpStatus.CREATED);
        }catch (IOException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PutMapping("updateProduct/{Id}")
    public ResponseEntity<String> updateProduct(@PathVariable int Id, @RequestPart Product product, @RequestPart MultipartFile imageFile){
        Product updatedProduct = null;

        try{
            product.setId(Id);
            updatedProduct = service.addOrUpdateProduct(product, imageFile);
            return new ResponseEntity<>("Updated", HttpStatus.OK);
        }catch (IOException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.OK);
        }
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable int id) {
        Product product = service.getProductById(id);
        if (product != null) {
            service.deleteProduct(id);
            return new ResponseEntity<>("Deleted", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Not Found", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("search/{keyword}")
    public ResponseEntity<?> searchProduct(@PathVariable String keyword){
        List<Product> products = service.searchProduct(keyword);
        if(!products.isEmpty()){
            return new ResponseEntity<>(products, HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Not Found", HttpStatus.NOT_FOUND);
        }
    }
}
