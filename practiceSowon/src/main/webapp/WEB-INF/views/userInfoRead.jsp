<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<table class="pop-register-list">
	<thead>
		<tr>
			<td>등록번호</td>
			<td>성명</td>
			<td>소속회사</td>
			<td>부서</td>
			<td>성별</td>
			<td>경력</td>
			<td>등록날짜</td>
		</tr>
	</thead>
	<tbody>
		<c:forEach items="${list }" var="list">
		<tr>
			<td>${list.userIdx }</td>
			<td>${list.userName }</td>
			<td>${list.userComp }</td>
			<td>${list.userDept }</td>
			<td>${list.userSex }</td>
			<td>${list.career }</td>
			<td>${list.userCompEnterdate }</td>
		</tr>
		</c:forEach>
	</tbody>
</table>

<div class="pop-paging-pannel"></div>