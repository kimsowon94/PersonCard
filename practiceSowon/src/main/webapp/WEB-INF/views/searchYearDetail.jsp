<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<form id="searchYearDetailForm">
<!-- <input type="hidden" id="pageNo1"name="pageNo1" value="1"> 
<input type="hidden" id="userInfoDataSize" name="userInfoDataSize" value="10"> -->
<input type="hidden" value="${ career }" id="career" name="career">
<table class="pop-register-list">
	<thead>
		<tr>
			<td>��Ϲ�ȣ</td>
			<td>����</td>
			<td>�Ҽ�ȸ��</td>
			<td>�μ�</td>
			<td>����</td>
			<td>���</td>
			<td>��ϳ�¥</td>
		</tr>
	</thead>
	<tbody>
		<c:forEach items="${list }" var="list">
		<tr onclick="fnPersonInfo('${ list.userIdx }')">
			<td>${list.userIdx }</td>
			<td>${list.userName }</td>
			<td>${list.userComp }</td>
			<td>${list.userDept }</td>
			<td>${list.userSex }</td>
			<td id="career">${list.career }</td>
			<td>${list.userRegisterDate }</td>
		</tr>
		</c:forEach>
	</tbody>
</table>
</form>
<div class="pop-paging-pannel"> 	
    <a href="javascript:;" class="first" onclick="pageCh1('1')">ó��</a>
    <a href="javascript:;" class="prev" onclick="pageCh1('${paging.prevPageNo}')">����</a>
    <span>
        <c:forEach var="i" begin="${paging.startPageNo}" end="${paging.endPageNo}" step="1">
            <c:choose>
                <c:when test="${i eq paging.pageNo1}"><a href="javascript:;" class="choice">${i}</a></c:when>
                <c:otherwise><a href="javascript:;" onclick="pageCh1('${i}')">${i}</a></c:otherwise>
            </c:choose>
        </c:forEach>
    </span>
    <a href="javascript:;" class="next" onclick="pageCh1('${paging.nextPageNo}')">����</a>
    <a href="javascript:;" class="last" onclick="pageCh1('${paging.finalPageNo}')">������</a>

</div>