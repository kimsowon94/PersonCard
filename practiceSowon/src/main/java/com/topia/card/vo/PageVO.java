package com.topia.card.vo;
public class PageVO {
		

	/*========================================*/
		private int pageSize; // �Խ� �� ��
	    private int firstPageNo; // ù ��° ������ ��ȣ
	    private int prevPageNo; // ���� ������ ��ȣ
	    private int startPageNo; // ���� ������ (����¡ �׺� ����)
	    private int pageNo1; // ������ ��ȣ
	   

		private int endPageNo; // �� ������ (����¡ �׺� ����)
	    private int nextPageNo; // ���� ������ ��ȣ
	    private int finalPageNo; // ������ ������ ��ȣ
	    private int totalCount; // �Խ� �� ��ü ��

	    /**
	     * @return the pageSize
	     */
	    public int getPageSize() {
	        return pageSize;
	    }

	    /**
	     * @param pageSize the pageSize to set
	     */
	    public void setPageSize(int pageSize) {
	        this.pageSize = pageSize;
	    }

	    /**
	     * @return the firstPageNo
	     */
	    public int getFirstPageNo() {
	        return firstPageNo;
	    }

	    /**
	     * @param firstPageNo the firstPageNo to set
	     */
	    public void setFirstPageNo(int firstPageNo) {
	        this.firstPageNo = firstPageNo;
	    }

	    /**
	     * @return the prevPageNo
	     */
	    public int getPrevPageNo() {
	        return prevPageNo;
	    }

	    /**
	     * @param prevPageNo the prevPageNo to set
	     */
	    public void setPrevPageNo(int prevPageNo) {
	        this.prevPageNo = prevPageNo;
	    }

	    /**
	     * @return the startPageNo
	     */
	    public int getStartPageNo() {
	        return startPageNo;
	    }

	    /**
	     * @param startPageNo the startPageNo to set
	     */
	    public void setStartPageNo(int startPageNo) {
	        this.startPageNo = startPageNo;
	    }

	    /**
	     * @return the pageNo
	     */
	    public int getPageNo1() {
			return pageNo1;
		}

		
	    /**
	     * @param pageNo the pageNo to set
	     */
	    public void setPageNo1(int pageNo1) {
			this.pageNo1 = pageNo1;
		}

	    /**
	     * @return the endPageNo
	     */
	    public int getEndPageNo() {
	        return endPageNo;
	    }

	    /**
	     * @param endPageNo the endPageNo to set
	     */
	    public void setEndPageNo(int endPageNo) {
	        this.endPageNo = endPageNo;
	    }

	    /**
	     * @return the nextPageNo
	     */
	    public int getNextPageNo() {
	        return nextPageNo;
	    }

	    /**
	     * @param nextPageNo the nextPageNo to set
	     */
	    public void setNextPageNo(int nextPageNo) {
	        this.nextPageNo = nextPageNo;
	    }

	    /**
	     * @return the finalPageNo
	     */
	    public int getFinalPageNo() {
	        return finalPageNo;
	    }

	    /**
	     * @param finalPageNo the finalPageNo to set
	     */
	    public void setFinalPageNo(int finalPageNo) {
	        this.finalPageNo = finalPageNo;
	    }

	    /**
	     * @return the totalCount
	     */
	    public int getTotalCount() {
	        return totalCount;
	    }

	    /**
	     * @param totalCount the totalCount to set
	     */
	    public void setTotalCount(int totalCount) {
	        this.totalCount = totalCount;
	        this.makePaging();
	    }

	    /**
	     * ����¡ ����
	     */
	    private void makePaging() {
	        if (this.totalCount == 0) return; // �Խ� �� ��ü ���� ���� ���
	        if (this.pageNo1 == 0) this.setPageNo1(1); // �⺻ �� ����
	        if (this.pageSize == 0) this.setPageSize(10); // �⺻ �� ����

	        int finalPage = (totalCount + (pageSize - 1)) / pageSize; // ������ ������
	        if (this.pageNo1 > finalPage) this.setPageNo1(finalPage); // �⺻ �� ����

	        if (this.pageNo1 < 0 || this.pageNo1 > finalPage) this.pageNo1 = 1; // ���� ������ ��ȿ�� üũ

	        boolean isNowFirst = pageNo1 == 1 ? true : false; // ���� ������ (��ü)
	        boolean isNowFinal = pageNo1 == finalPage ? true : false; // ������ ������ (��ü)

	        int startPage = ((pageNo1 - 1) / 10) * 10 + 1; // ���� ������ (����¡ �׺� ����)
	        int endPage = startPage + 10 - 1; // �� ������ (����¡ �׺� ����)

	        if (endPage > finalPage) { // [������ ������ (����¡ �׺� ����) > ������ ������] ���� ū ���
	            endPage = finalPage;
	        }

	        this.setFirstPageNo(1); // ù ��° ������ ��ȣ

	        if (isNowFirst) {
	            this.setPrevPageNo(1); // ���� ������ ��ȣ
	        } else {
	            this.setPrevPageNo(((pageNo1 - 1) < 1 ? 1 : (pageNo1 - 1))); // ���� ������ ��ȣ
	        }

	        this.setStartPageNo(startPage); // ���� ������ (����¡ �׺� ����)
	        this.setEndPageNo(endPage); // �� ������ (����¡ �׺� ����)

	        if (isNowFinal) {
	            this.setNextPageNo(finalPage); // ���� ������ ��ȣ
	        } else {
	        	 this.setNextPageNo(((pageNo1 + 1) > finalPage ? finalPage : (pageNo1 + 1)));

	        }

	        this.setFinalPageNo(finalPage); // ������ ������ ��ȣ
	    }

	/*
	 * @Override public String toString() { return
	 * ToStringBuilder.reflectionToString(this, ToStringStyle.SHORT_PREFIX_STYLE); }
	 */

	
	/*========================================*/




	
}
