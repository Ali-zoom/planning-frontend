import { number } from "motion";

export type project_tab = {
  proID: number;
  Estethmar?: string;
  Bab?: string;
  Keshem?: string;
  Qataa?: string;
  Mada?: string;
  Nawaa?: string;
  Tasalsl?: string;
  proname?: string;
  KalfaEdrag?: string;
  Jehamostafed?: string;
  EdragYear?: string;
  adedMkawenat?: string;
  TakhtetNumber?: string;
  TakhtetData?: string;
  MaleaNumber?: string;
  MaleaDate?: string;
  notes?: string;
  currentKulfa?: string;
  makwenat: makwenat_tab[];
};

export type makwenat_tab = {
  mukwenID: number;
  projectID: number;
  mukwenName?: string;
  KulfaTotal?: string;
  txtehala?: string;
  txtcompany?: string;
  txtakedNumber?: string;
  dtakedDate?: string;
  txtnotes?: string;
  muda?: string;
  txtLocation?: string;
  txtContractName?: string;
  txtMobashraDate?: string;
  txtMokemName?: string;
  txtMobile?: string;
  imageData?: string;
  motabaa_fanya: motabaa_fanya_tab[];
  motabaa_Maly: motabaa_Maly_tab[];
  motabaa_Qanwn: motabaa_Qanwny_tab[];
};

export type motabaa_fanya_tab = {
  motabaaFanyID: number;
  proID?: number;
  mokawenID: number;
  bookNumber?: string;
  bookDate?: string;
  engazFany?: string;
  engazMokhatat?: string;
  mokef?: string;
  notes?: string;
  nesbatEnheraf?: string;
  txtEstelamDate?: string;
};

export type motabaa_Maly_tab = {
  motabaaMalyID: number;
  proID?: number;
  mokawenID: number;
  SanadNumber?: string;
  SanadDate?: Date;
  SanadType?: string;
  MablagMasrof?: string;
  notes?: string;
};

export type motabaa_Qanwny_tab = {
  motabaaQanwneyaID: number;
  proID?: number;
  mokawenID: number;
  txtMulhekName?: string;
  dtBookDate?: string;
  txtBookNumber?: string;
  txtMablag?: string;
  txtModa?: string;
  txtnotes?: string;
  txtMablagEstehdath?: string;
};
