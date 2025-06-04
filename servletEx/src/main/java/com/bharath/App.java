package com.bharath;

/**
 * Hello world!
 *
 */
import java.io.File;
import org.apache.catalina.Context;
import org.apache.catalina.LifecycleException;
import org.apache.catalina.startup.Tomcat;
public class App
{
    public static void main( String[] args ) throws LifecycleException {
        System.out.println( "Hello World!" );

        Tomcat tomcat = new Tomcat();
        tomcat.setPort(8080);
        tomcat.getConnector();

        Context context = tomcat.addContext("", new File(".").getAbsolutePath());
        Tomcat.addServlet(context,"HelloWorldServlet", new HelloWorldServlet());
        context.addServletMappingDecoded("/hello", "HelloWorldServlet");

        tomcat.start();
        tomcat.getServer().await();
    }
}
