<%@ page language="java"%>
<!DOCTYPE html>
<html>
<head>
    <title>Add Two Numbers</title>
    <%-- Link to your "Coffee Theme" CSS file --%>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Add Two Numbers</h2>
        <form action="add">
            <label for="num1">First Number:</label>
            <input type="text" id="num1" name="num1" value="<%= request.getParameter("num1") != null ? request.getParameter("num1") : "" %>" required>
            <br>
            <label for="num2">Second Number:</label>
            <input type="text" id="num2" name="num2" value="<%= request.getParameter("num2") != null ? request.getParameter("num2") : "" %>" required>
            <br>
            <input type="submit" value="Add Numbers">
        </form>
    </div>
</body>
</html>