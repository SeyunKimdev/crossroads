package com.crossroads.app.mapper;

import com.crossroads.app.domain.vo.MemberVO;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.lang.reflect.Member;

@SpringBootTest
@Slf4j
public class MemberMapperTests {
    @Autowired
    MemberMapper memberMapper;
    PointMapper pointMapper;

    //회원가입 테스트
//   @Test
//    public void insertTest(){
//        MemberVO memberVO = new MemberVO();
//        memberVO.setMemberIdentification("bcd123");
//        memberVO.setMemberPassword("1234");
//        memberVO.setMemberName("정세인");
//        memberVO.setMemberPhone("01011111111");
//        memberVO.setMemberEmail("abc@naver.com");
//
//        memberMapper.join(memberVO);
//    }
//
//    @Test
//    public void selectTest(){
//       log.info(memberMapper.select(1L).toString());
//    }

    @Test
    public void selectTest(){
//       log.info(memberMapper.select(1L).toString());
    }


/*    @Test
    public void updateTest(){
        MemberVO memberVO = memberMapper.select(1L);
        memberMapper.changePassword("abc123@gmail.com", "asdf");
    }*/


    @Test
    public void getRandomKeyTest(){
        MemberVO memberVO = new MemberVO();
        memberMapper.selectRandomKey("seinee114@gmail.com");
    }

    @Test
    public void changePasswordTest(){
        MemberVO memberVO = new MemberVO();
        memberMapper.changePassword("filetest@gmail.com", "passwordtest31");
    }




}
