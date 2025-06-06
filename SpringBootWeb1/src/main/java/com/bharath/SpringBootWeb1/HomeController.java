package com.bharath.SpringBootWeb1;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.apache.catalina.Session;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {

    @RequestMapping("/")
    public String home(){
        System.out.println("In home!!!");
        return "index";
    }

    @RequestMapping("/add")
    public String addNumbers(@RequestParam("num1") int num1, @RequestParam("num2") int num2, Model model){

        int result = num1+num2;

        System.out.println(result);
        model.addAttribute("result", result);

        return "result";
    }
}
