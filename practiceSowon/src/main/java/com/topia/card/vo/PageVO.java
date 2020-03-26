package com.topia.card.vo;

public class PageVO {
	private int pageSize = 10;		// 한 페이지당 게시글 수
	private int rangeSize = 5;		// 한 블럭당 페이지 수
	private int pageNo = 1;			// 현재 페이지
	private int curRange = 1;		// 현재 블럭
	private int listCnt;			// 총 게시글 수
	private int pageCnt;			// 총 페이지 수
	private int rangeCnt;			// 총 블럭 수
	private int startPage = 1;		// 블럭의 시작페이지
	private int endPage = 1;		// 블럭의 끝페이지
	private int startIndex;			// 쿼리 시작 인덱스
	private int endIndex;			// 쿼리 끝 인덱스
	private int prevPage;			// 이전 페이지
	private int nextPage;			// 다음 페이지
	
	public PageVO() {}
	
	public PageVO(int listCnt, int pageNo)
	{
		setPageNo(pageNo);	// 현재페이지
		
		setStartIndex(pageNo);
		setEndIndex(pageNo);
		
		setListCnt(listCnt);	// 총 게시물 수
		
		setPageCnt(listCnt);	// 총 페이지 수
		
		setRangeCnt(pageNo);	// 총 블럭 수
		
		rangeSetting(pageNo);			// 블럭 세팅
	}
	
	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getRangeSize() {
		return rangeSize;
	}

	public void setRangeSize(int rangeSize) {
		this.rangeSize = rangeSize;
	}

	public int getPageNo() {
		return pageNo;
	}

	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}

	public int getListCnt() {
		return listCnt;
	}

	public void setListCnt(int listCnt) {
		this.listCnt = listCnt;
	}

	public int getStartPage() {
		return startPage;
	}

	public void setStartPage(int startPage) {
		this.startPage = startPage;
	}

	public int getEndPage() {
		return endPage;
	}

	public void setEndPage(int endPage) {
		this.endPage = endPage;
	}

	public int getPrevPage() {
		return prevPage;
	}

	public void setPrevPage(int prevPage) {
		this.prevPage = prevPage;
	}

	public int getNextPage() {
		return nextPage;
	}

	public void setNextPage(int nextPage) {
		this.nextPage = nextPage;
	}

	public int getCurRange() {
		return curRange;
	}

	public int getPageCnt() {
		return pageCnt;
	}

	public int getRangeCnt() {
		return rangeCnt;
	}

	public int getStartIndex() {
		return startIndex;
	}

	public int getEndIndex() {
		return endIndex;
	}

	public void setPageCnt(int pageCnt) {
		this.pageCnt = (int) Math.ceil(listCnt*1.0/pageSize);	// 1. 전체 페이지 수 구하는 계산
	}
	
	public void setRangeCnt(int rangeCnt) {
		this.rangeCnt = (int) Math.ceil(pageCnt*1.0/rangeSize);	// 2. 총 블럭 수를 계산
	}
	
	public void rangeSetting(int pageNo) {
		setCurRange(pageNo);        
        this.startPage = (curRange - 1) * rangeSize + 1;		// 3. 현재 출력되는 블럭의 시작페이지번호와 끝 페이지 번호 계산
        this.endPage = startPage + rangeSize - 1;				// 4. 3번과 동일(현재 블럭의 끝 페이지 번호계산)
        
        if(endPage > pageCnt){				// 5. 이 if문은 맨 처음의 페이지번호는 1로 고정이지만 마지막 블럭의 마지막페이지 번호는 
            this.endPage = pageCnt;					// 전체 페이지에 따라 달라지기에 총 페이지 수보다 마지막 페이지가 커질 수 없게 막음.
        }
        
        this.prevPage = pageNo - 1;
        this.nextPage = pageNo + 1;
	}
	
	public void setCurRange(int curRange) {
		this.curRange = (int)((pageNo-1)/rangeSize) + 1;
	}

	public void setStartIndex(int pageNo) {
		this.startIndex = (pageNo - 1) * 10 + 1;
	}

	public void setEndIndex(int pageNo) {
		this.endIndex = (pageNo) * 10;
	}
	

}
