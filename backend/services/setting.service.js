import models from '../database/models';

const { Setting } = models;

const getAllSettings = async () => {
  return Setting.findAll();
};

const getSettingById = async (id) => {
  return Setting.findByPk(id);
};

const updateSetting = async (setting, updates) => {
  return setting.update(updates);
};

export { getAllSettings, getSettingById, updateSetting };
