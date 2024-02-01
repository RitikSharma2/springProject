package secura;
import org.eclipse.jdt.internal.compiler.ast.AND_AND_Expression;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@EnableWebSecurity(debug = true)
public class MySecurityConfig extends WebSecurityConfigurerAdapter {
 
	// this class will create Security Filter Chain
	
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		// TODO Auto-generated method stub
		auth
		.inMemoryAuthentication()
		.withUser("ritik")
		.password("ritik123")
		.roles("admin");
	}
	
	@Bean
	PasswordEncoder getPasswordEncoder()
	{
		return NoOpPasswordEncoder.getInstance();
	}
	
	
	
	@Override
	protected void configure(HttpSecurity http) throws Exception
	{
		http
		  .csrf().disable()
		  .authorizeRequests().anyRequest().authenticated()
//	      .antMatchers("/resources/form.html").authenticated()
		  .and()
			  .formLogin()
			  .loginPage("/resources/login.html")
			  .loginProcessingUrl("/resources/form.html")
			  .defaultSuccessUrl("/resources/form.html",true)
			  .permitAll()
		  .and()
			  .logout();
			  
	
		      
//		System.out.println("you are in security");
		
		
		
	}
	
	
	
}
