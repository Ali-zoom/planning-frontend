import { number } from "motion";

export type project_tab = {
  proID: number;
  Estethmar?: String;
  Bab?: String;
  Keshem?: String;
  Qataa?: String;
  Mada?: String;
  Nawaa?: String;
  Tasalsl?: String;
  proname?: String;
  KalfaEdrag?: String;
  Jehamostafed?: String;
  EdragYear?: String;
  adedMkawenat?: String;
  TakhtetNumber?: String;
  TakhtetData?: String;
  MaleaNumber?: String;
  MaleaDate?: String;
  notes?: String;
  currentKulfa?: String;
  makwenat: makwenat_tab[];
};

export type makwenat_tab = {
  mukwenID: number;
  projectID: number;
  mukwenName?: String;
  KulfaTotal?: String;
  txtehala?: String;
  txtcompany?: String;
  txtakedNumber?: String;
  dtakedDate?: String;
  txtnotes?: String;
  muda?: String;
  txtLocation?: String;
  txtContractName?: String;
  txtMobashraDate?: String;
  txtMokemName?: String;
  txtMobile?: String;
  imageData?: String;
  motabaa_fanya: motabaa_fanya_tab[];
  motabaa_Maly: motabaa_Maly_tab[];
  motabaa_Qanwn: motabaa_Qanwny_tab[];
};

export type motabaa_fanya_tab = {
  motabaaFanyID: number;
  proID?: number;
  mokawenID: number;
  bookNumber?: String;
  bookDate?: String;
  engazFany?: String;
  engazMokhatat?: String;
  mokef?: String;
  notes?: String;
  nesbatEnheraf?: String;
  txtEstelamDate?: String;
};

export type motabaa_Maly_tab = {
  motabaaMalyID: number;
  proID?: number;
  mokawenID: number;
  SanadNumber?: String;
  SanadDate?: Date;
  SanadType?: String;
  MablagMasrof?: String;
  notes?: String;
};

export type motabaa_Qanwny_tab = {
  motabaaQanwneyaID: number;
  proID?: number;
  mokawenID: number;
  txtMulhekName?: String;
  dtBookDate?: String;
  txtBookNumber?: String;
  txtMablag?: String;
  txtModa?: String;
  txtnotes?: String;
  txtMablagEstehdath?: String;
};
