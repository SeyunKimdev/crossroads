package com.crossroads.app.dao;

import com.crossroads.app.domain.dao.MemberDAO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Slf4j
public class MemberDAOTests {
    @Autowired
    MemberDAO memberDAO;
}
