import Vue from 'vue';
import Vuex from 'vuex';
// import uibuilder from './../node_modules/node-red-contrib-uibuilder/nodes/src/uibuilderfe.js';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    init: true,

    // values 
    batchName: '',
    batchState: '',
    glucose: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    acqTime: '',
    acqDate: '',

    // diagnostics
    reachable: false,
    opcuaPortOpen: false,
    opcuaPortRunning: false,
    bindedWith: 'none',

    // system
    date: '',
    time: '',
    hostname: '',
    serial: '',
    uptime: '',
    eth0Ip: '',
    eth0Mac: '',
    eth0Speed: 0,

    //  dockers
    commGateway: false,
    controlModule: false,
    configModule: false,
    displayModule: false,
    mosquitto: false,
  },
  mutations: {

    // init
    SET_INIT(state, payload) {
    },


    // temperature
    ADD_TEMPERATURE(state, payload) {
      let temperature = payload.toFixed(3);
      state.temperature.shift();
      state.temperature.push(temperature);
    },
    // vibrations
    ADD_VIBRATIONS_X(state, payload) {
      let vib = Math.floor(payload);
      state.vib_x.shift();
      state.vib_x.push(vib);
    },
    ADD_VIBRATIONS_Y(state, payload) {
      let vib = Math.floor(payload);
      state.vib_y.shift();
      state.vib_y.push(vib);
    },
    ADD_VIBRATIONS_Z(state, payload) {
      let vib = Math.floor(payload);
      state.vib_z.shift();
      state.vib_z.push(vib);
    },

    SET_CURRENT_SENSOR_TAB(state, payload) {
      state.current_sensor_tab = payload;
    },

    // values
    SET_BATCH_NAME(state, payload) {
      state.batchName = payload;
    },
    SET_BATCH_STATE(state, payload) {
      state.batchState = payload;
    },
    SET_GLUCOSE(state, payload) {
      let glucose = Math.floor(payload);
      state.glucose.shift();
      state.glucose.push(glucose);
    },
    SET_ACQ_TIME(state, payload) {
      state.acqTime = payload;
    },
    SET_ACQ_DATE(state, payload) {
      state.acqDate = payload;
    },

    // diagnostics
    SET_REACHABLE(state, payload) {
      state.reachable = payload;
    },
    SET_OPCUA_PORT_OPEN(state, payload) {
      state.opcuaPortOpen = payload;
    },
    SET_OPCUA_PORT_RUNNING(state, payload) {
      state.opcuaPortRunning = payload;
    },
    SET_BINDED_WITH(state, payload) {
      state.bindedWith = payload;
    },

    // system
    SET_DATE(state, payload) {
      state.date = payload;
    },
    SET_TIME(state, payload) {
      state.time = payload;
    },
    SET_HOSTNAME(state, payload) {
      state.hostname = payload;
    },
    SET_SERIAL(state, payload) {
      state.serial = payload;
    },
    SET_UPTIME(state, payload) {
      state.uptime = payload;
    },
    SET_ETH0_IP(state, payload) {
      state.eth0Ip = payload;
    },
    SET_ETH0_MAC(state, payload) {
      state.eth0Mac = payload;
    },
    SET_ETH0_SPEED(state, payload) {
      state.eth0Speed = payload;
    },

    // dockers
    SET_COMM_GATEWAY(state, payload) {
      state.commGateway = payload;
    },
    SET_CONTROL_MODULE(state, payload) {
      state.controlModule = payload;
    },
    SET_CONFIG_MODULE(state, payload) {
      state.configModule = payload;
    },
    SET_DISPLAY_MODULE(state, payload) {
      state.displayModule = payload;
    },
    SET_MOSQUITTO(state, payload) {
      state.mosquitto = payload;
    },

  },
  actions: {
    // init
    init: ({ commit }, payload) => commit('SET_INIT', payload),

    // valuse
    setBatchName: ({ commit }, payload) => commit('SET_BATCH_NAME', payload),
    setBatchState: ({ commit }, payload) => commit('SET_BATCH_STATE', payload),
    setGlucose: ({ commit }, payload) => commit('SET_GLUCOSE', payload),
    setAcqTime: ({ commit }, payload) => commit('SET_ACQ_TIME', payload),
    setAcqDate: ({ commit }, payload) => commit('SET_ACQ_DATE', payload),

    // diagnostics
    setReachable: ({ commit }, payload) => commit('SET_REACHABLE', payload),
    setOpcuaPortOpen: ({ commit }, payload) => commit('SET_OPCUA_PORT_OPEN', payload),
    setOpcuaPortRunning: ({ commit }, payload) => commit('SET_OPCUA_PORT_RUNNING', payload),
    setBindedWith: ({ commit }, payload) => commit('SET_BINDED_WITH', payload),

    // system
    setDate: ({ commit }, payload) => commit('SET_DATE', payload),
    setTime: ({ commit }, payload) => commit('SET_TIME', payload),
    setHostname: ({ commit }, payload) => commit('SET_HOSTNAME', payload),
    setSerial: ({ commit }, payload) => commit('SET_SERIAL', payload),
    setUptime: ({ commit }, payload) => commit('SET_UPTIME', payload),
    setEth0Ip: ({ commit }, payload) => commit('SET_ETH0_IP', payload),
    setEth0Mac: ({ commit }, payload) => commit('SET_ETH0_MAC', payload),
    setEth0Speed: ({ commit }, payload) => commit('SET_ETH0_SPEED', payload),

    // dockers
    setCommGateway: ({ commit }, payload) => commit('SET_COMM_GATEWAY', payload),
    setControlModule: ({ commit }, payload) => commit('SET_CONTROL_MODULE', payload),
    setConfigModule: ({ commit }, payload) => commit('SET_CONFIG_MODULE', payload),
    setDisplayModule: ({ commit }, payload) => commit('SET_DISPLAY_MODULE', payload),
    setMosquitto: ({ commit }, payload) => commit('SET_MOSQUITTO', payload),

    // sensors
    addTemperature: ({ commit }, payload) => commit('ADD_TEMPERATURE', payload),
    addVibrationsX: ({ commit }, payload) => commit('ADD_VIBRATIONS_X', payload),
    addVibrationsY: ({ commit }, payload) => commit('ADD_VIBRATIONS_Y', payload),
    addVibrationsZ: ({ commit }, payload) => commit('ADD_VIBRATIONS_Z', payload),
  }
  
});
