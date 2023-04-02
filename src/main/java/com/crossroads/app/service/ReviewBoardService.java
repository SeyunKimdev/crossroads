package com.crossroads.app.service;

import com.crossroads.app.domain.dao.ReviewDAO;
import com.crossroads.app.domain.dto.BoardDTO;
import com.crossroads.app.domain.dto.ReviewDTO;
import com.crossroads.app.domain.dto.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@Qualifier("board")
@RequiredArgsConstructor
public class ReviewBoardService implements BoardService {
    private final ReviewDAO reviewDAO;

    @Override
    public Map<String, Object> getListAdmin(Map<String, Object> requestData, Criteria criteria) {
        return null;
    }

    @Override
    public Integer getCountAdmin(String keyword) {
        return null;
    }

//    마이페이지 후기 목록
    @Override
    public List<ReviewDTO> getListMy(Long memberId) {
        return reviewDAO.findAllMy(memberId);
    }

    @Override
    public void remove(List<String> boardIds) {
        boardIds.stream().map(boardId -> Long.parseLong(boardId)).forEach(reviewDAO::deleteById);
    }
    public List<BoardDTO> getListAdmin() { return null; }

    @Override
    public List<BoardDTO> getList() {
        return null;
    }

    @Override
    public List<ReviewDTO> getListReview() {
        return reviewDAO.findAllReview();
    }

//    마이페이지 게시판 목록
    @Override
    public List<BoardDTO> getListMyBoard(Long memberId) { return null; }

}
