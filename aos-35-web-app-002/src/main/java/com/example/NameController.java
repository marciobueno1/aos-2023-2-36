package com.example;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NameController {
    @RequestMapping("/name")
    public String hello(@RequestParam String name) {
        return "Hello " + name;
    }
}
