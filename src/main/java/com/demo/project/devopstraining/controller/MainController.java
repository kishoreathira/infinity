package com.demo.project.devopstraining.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
	
	@GetMapping("/")
	public String getmessage() {
		return "Hi, Welcome to Devops Training !!!";
	}

}
