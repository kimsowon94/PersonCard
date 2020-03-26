<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<input type="hidden" value="${cnt }" id="userInfoCnt" name="userInfoCnt">
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

<div class="pop-paging-pannel">

    <a href="javascript:;" class="first" onclick="pageCh('1')">처음</a>
    <a href="javascript:;" class="prev" onclick="pageCh(${paging.prevPageNo})">이전</a>
    <span>
        <c:forEach var="i" begin="${paging.startPageNo}" end="${paging.endPageNo}" step="1">
            <c:choose>
                <c:when test="${i eq paging.pageNo1}"><a href="javascript:;" class="choice">${i}</a></c:when>
                <c:otherwise><a href="javascript:;" onclick="pageCh(${i})">${i}</a></c:otherwise>
            </c:choose>
        </c:forEach>
    </span>
    <a href="javascript:;" class="next" onclick="pageCh(${paging.nextPageNo})">다음</a>
    <a href="javascript:;" class="last" onclick="pageCh(${paging.finalPageNo})">마지막</a>

</div>