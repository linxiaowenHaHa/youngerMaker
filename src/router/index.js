import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'

import login from '@/views/account/login'
import register from '@/views/account/register' 
import retrievePassword from '@/views/account/retrievePassword' 
import registerSuccess from '@/views/account/registerSuccess' 
import registerFailed from '@/views/account/registerFailed' 
import basicInformation from '@/views/account/basicInformation' 
import informationConfirm from '@/views/account/informationConfirm' 
import signupSuccess from '@/views/account/signupSuccess' 

import firstTestDescription from '@/views/firstTest/firstTestDescription' 
import questionList from '@/views/firstTest/questionList' 
import firstTestSuccess from '@/views/firstTest/firstTestSuccess' 
import firstTestFailed from '@/views/firstTest/firstTestFailed' 

import resurrection from '@/views/resurrection/resurrection' 
import resurrectionInvitation from '@/views/resurrection/resurrectionInvitation' 
import resurrectionSuccess from '@/views/resurrection/resurrectionSuccess' 

import weibo from '@/views/secondTest/weibo' 
import selectGroup from '@/views/secondTest/selectGroup' 
import mediaGroup from '@/views/secondTest/mediaGroup' 
import mediaGroupSuccess from '@/views/secondTest/mediaGroupSuccess' 
import waitForResult from '@/views/secondTest/waitForResult'
import auditApproved from '@/views/secondTest/auditApproved'
import auditFailure from '@/views/secondTest/auditFailure'
import secondTestDescription from '@/views/secondTest/secondTestDescription'

import testQuestions from '@/views/testModule/testQuestions' 
import testCompleted from '@/views/testModule/testCompleted' 
import testResult from '@/views/testModule/testResult' 
  
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: index
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/register',
      name: 'Register',
      component: register
    },
    {
      path: '/retrievePassword',
      name: 'RetrievePassword',
      component: retrievePassword
    },
    {
      path: '/registerSuccess',
      name: 'RegisterSuccess',
      component: registerSuccess
    },
    {
      path: '/registerFailed',
      name: 'RegisterFailed',
      component: registerFailed
    },
    {
      path: '/basicInformation',
      name: 'BasicInformation',
      component: basicInformation
    },
    {
      path: '/informationConfirm',
      name: 'InformationConfirm',
      component: informationConfirm
    },
    {
      path: '/signupSuccess',
      name: 'SignupSuccess',
      component: signupSuccess
    },
    {
      path: '/firstTestDescription',
      name: 'FirstTestDescription',
      component: firstTestDescription
    },
    {
      path: '/firstTestSuccess',
      name: 'FirstTestSuccess',
      component: firstTestSuccess
    },
    {
      path: '/firstTestFailed',
      name: 'FirstTestFailed',
      component: firstTestFailed
    },
    {
      path: '/questionList',
      name: 'QuestionList',
      component: questionList
    },
    {
      path: '/resurrection',
      name: 'Resurrection',
      component: resurrection
    },
    {
      path: '/resurrectionInvitation',
      name: 'ResurrectionInvitation',
      component: resurrectionInvitation
    },
    {
      path: '/resurrectionSuccess',
      name: 'ResurrectionSuccess',
      component: resurrectionSuccess
    },
    {
      path: '/testQuestions',
      name: 'TestQuestions',
      component: testQuestions
    },
    {
      path: '/testCompleted',
      name: 'TestCompleted',
      component: testCompleted
    },
    {
      path: '/testResult',
      name: 'TestResult',
      component: testResult
    },
    {
      path: '/secondTest/weibo',
      name: 'Weibo',
      component: weibo
    },
    {
      path: '/secondTest/selectGroup',
      name: 'SelectGroup',
      component: selectGroup
    },
    {
      path: '/secondTest/mediaGroup',
      name: 'MediaGroup',
      component: mediaGroup
    },
    {
      path: '/secondTest/mediaGroupSuccess',
      name: 'MediaGroupSuccess',
      component: mediaGroupSuccess
    },
    {
      path: '/secondTest/waitForResult',
      name: 'WaitForResult',
      component: waitForResult
    },
    {
      path: '/secondTest/auditApproved',
      name: 'AuditApproved',
      component: auditApproved
    },
    {
      path: '/secondTest/auditFailure',
      name: 'AuditFailure',
      component: auditFailure
    },
    {
      path: '/secondTest/secondTestDescription',
      name: 'SecondTestDescription',
      component: secondTestDescription
    },
  ]
})
