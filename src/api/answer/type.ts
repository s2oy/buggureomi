import { BaseResponse } from "../type";
import { Answer } from "@/types/answer";
import { SelfReflection } from "@/types/self-reflection";

export type AnswerCreateParam = {
  memberId: number;
  questionId: string | number;
  nickname: string;
  sender: string;
  content: string;
  colorCode: string;
};

export type AnswerCreateResponse = BaseResponse<{
  nickname: string;
  questionContent: string;
  colorCode: string;
}>;

export type SelfReflectionAnswerResponse = BaseResponse<SelfReflection>;

export type GetAnswerListParam = {
  userId: number;
};

export type GetAnswerListResponse = BaseResponse<{
  list: Answer[] | null;
  nickname: string;
  totalCount: number;
}>;

export type GetAnswerDetailParam = {
  answerId: number;
};
export type GetAnswerDetailResponse = BaseResponse<Answer | null>;

export type DeleteAnswerParam = {
  answerId: number;
};
export type DeleteAnswerResponse = BaseResponse<null>;
