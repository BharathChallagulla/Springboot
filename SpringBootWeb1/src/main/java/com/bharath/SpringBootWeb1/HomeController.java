package com.bharath.SpringBootWeb1;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.apache.catalina.Session;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping("/")
    public String home(){
        System.out.println("In home!!!");
        return "index.jsp";
    }

    @RequestMapping("/add")
    public String addNumbers(HttpServletRequest req, HttpSession session){

        int num1 = Integer.parseInt(req.getParameter("num1"));
        int num2 = Integer.parseInt(req.getParameter("num2"));
        int result = num1+num2;

        session.setAttribute("result", result);
        System.out.println(result);
        return "result.jsp";
    }
}
