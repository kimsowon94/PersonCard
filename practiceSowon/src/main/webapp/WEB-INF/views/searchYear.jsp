<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<input type="hidden" value="${cnt }" id="userInfoCnt" name="userInfoCnt">
<table class="pop-register-list">
	<thead>
		<tr>
			<td>경력 연차</td>
			<td>명</td>
		</tr>
	</thead>
	<tbody>		
		<c:forEach items="${ searchYear}" var="list">
			<tr>
				<td>${list.career } 년차</td>
				<td>${list.userIdxCnt } 명</td>
			</tr>
		</c:forEach>
	</tbody>
</table>
