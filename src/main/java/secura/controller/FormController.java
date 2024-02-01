package secura.controller;
import java.util.ArrayList;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import secura.entity.Info;

@RestController
public class FormController {

    ArrayList<Info> list=new ArrayList<Info>();
	
	@PostMapping("/resources/saveuser")
	public ArrayList<Info> createUser(@RequestBody Info info)
	{
		System.out.println("In Post method of RestController = "+info);
		
        
		list.add(info);
		System.out.println("password field = "+info.getPassword());
		System.out.println("List = "+list);
		return list;
	}
	
	
	@DeleteMapping("/resources/deleteuser/{userId}")
	public void deleteUser(@PathVariable("userId") String userId)
	{
		System.out.println("UserID = "+userId);
		
		for(Info user:list)
		{
			if(userId.equals(user.getId()))
			{
				System.out.println("Delete RestController UserID = "+userId);
				list.remove(user);
				break;
			}
		}
		System.out.println("list after deletion = "+list);
		System.out.println("list Size after deletion = "+list.size());
		
	}
	
	
	@PutMapping("/resources/updateuser/{userId}")
	public void updateUser(@RequestBody Info info,@PathVariable("userId") String userId)
	{
		       
		
		for(Info user:list)
		{
			if(userId.equals(user.getId()))
			{
				user.setId(info.getPhone()+info.getName());
				user.setName(info.getName());
				user.setAge(info.getAge());
				user.setGender(info.getGender());
				user.setEmail(info.getEmail());
				user.setDob(info.getDob());
				user.setPhone(info.getPhone());
				
			}
		}
		
		
	}
	
}
