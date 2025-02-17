import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Questionario extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String pergunta1 = request.getParameter("pergunta1");
        String pergunta2 = request.getParameter("pergunta2");

        // Processar as respostas aqui
        System.out.println("Pergunta 1: " + pergunta1);
        System.out.println("Pergunta 2: " + pergunta2);

        // Redirecionar para uma página de agradecimento
        response.sendRedirect("agradecimento.html");
    }
}