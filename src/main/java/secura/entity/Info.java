package secura.entity;


import com.fasterxml.jackson.annotation.JsonProperty;

public class Info {

	private String id;

	@JsonProperty 
	private String name;
	
	@JsonProperty
	private String age;
	
	
	@JsonProperty
	private String gender;
	
	
	@JsonProperty
	private String email;
	
	
	@JsonProperty
	private String dob;
	
	
	@JsonProperty
	private String phone;
	
	@JsonProperty
	private String password;
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	@Override
	public String toString() {
		return "Info [id=" + id + ", name=" + name + ", age=" + age + ", gender=" + gender + ", email=" + email
				+ ", dob=" + dob + ", phone=" + phone + ", password=" + password + "]";
	}
	
	
	
}
